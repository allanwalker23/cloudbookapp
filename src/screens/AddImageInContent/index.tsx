import React from 'react';

import {
    Container,
    ImageContent,
    ChangePhoto,
    CircleCamera,
    TargetCamera,
    Footer
} from './styles';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Alert } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputForm } from '../../components/InputForm';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { usePath } from '../../hooks/usePath';
import * as ImagePicker from 'expo-image-picker';

export type NavigationProps = {
    navigate: (screen: string, options?: any) => void;
};

interface FormData {
    image: string;
}

const schema = yup.object().shape({
    image: yup.string().required('Preenchimento obrigatório')
});

export function AddImageInContent({ navigation }: any) {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const [imageURI, setImageURI] = useState('');
    const [imageSelected, setImageSelected] = useState(false);
    const { pathSubject } = usePath();

    async function handleSave(content: FormData) {
        if (imageURI === '')
            return Alert.alert('Selecione uma imagem primeiro');

        console.log('Imagem adicionada');
        // await movePhotoToSubject(String(content.image))
    }

    //   async function movePhotoToSubject(namePhoto:string){

    //     const exists = await FS.exists(pathSubject+"/"+namePhoto);
    //     if (!exists){
    //       FS.moveFile(imageURI,pathSubject+"/"+namePhoto+".jpg").then(r=>{
    //         navigation.navigate('Contents');
    //       }).catch(err=>{
    //         console.log(err)
    //         return Alert.alert("Erro ao adicionar conteúdo")
    //       })

    //     }else{

    //         return Alert.alert("Erro este conteúdo já existe")
    //     }
    // }

    const handleGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        });

        if (result.cancelled) {
            console.log(result);
        } else {
            setImageSelected(true);
            setImageURI(result!.uri || '');
        }
    };

    return (
        <Container>
            <Header title="Adicionar Foto" type="addContent" />

            <ChangePhoto onPress={handleGallery}>
                {imageSelected ? (
                    <ImageContent source={{ uri: imageURI }} />
                ) : (
                    <ImageContent
                        style={{ width: 350 }}
                        source={require('../../assets/404_photo.png')}
                    />
                )}
                {imageSelected && (
                    <CircleCamera onPress={handleGallery}>
                        <TargetCamera name="camera" />
                    </CircleCamera>
                )}
            </ChangePhoto>

            <InputForm
                name="image"
                control={control}
                icon="pencil"
                autoCapitalize="sentences"
                maxLength={20}
                error={errors.image && errors.image.message}
                placeholder="Digite o assunto"
                placeholderTextColor="#666360"
            />

            <Footer>
                <Button title="Salvar" onPress={handleSubmit(handleSave)} />
            </Footer>
        </Container>
    );
}
