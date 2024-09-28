import profilePic from 'src/assets/illustrations/05.png';

export interface User {
  id: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  profilePicture?: string | null;
}

export const currentUser: User[] = [
  {
    id: '38177592-87b7-4574-81a6-05673176db84',
    name: 'Iriana',
    surname: 'Saliha',
    username: 'username',
    password: 'iriana123',
    email: 'iriana@example.com',
    // profilePicture: null,
    profilePicture: profilePic,
  },
];
