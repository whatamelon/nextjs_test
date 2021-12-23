import CharacterBox  from './CharacterBox';
import { Meta, Story } from '@storybook/react';
import { CharacterModel } from '../../../interface/character';

export default {
    title: "component|box",
    component: CharacterBox,
    argTypes:{
        // activeBorderColor:{
        //     control:'select'
        // }
    }
} as Meta;

const model = new CharacterModel({
    id: 170,
    name: 'Jacqueline',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/170.jpeg',
    episode: [ 'https://rickandmortyapi.com/api/episode/27' ],
    url: 'https://rickandmortyapi.com/api/character/170',
    created: '2017-12-29T17:22:17.707Z'
});


export const Default: Story<{activeBorderColor:string}> = (args) => <CharacterBox data={model} {...args} />;

Default.args = {
    activeBorderColor: 'border-blue-500'
}