export interface User {
  id: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  profilePicture?: string | null;
}

export const allUsers: User[] = [
  {
    id: 1,
    name: 'Iriana',
    surname: 'Saliha',
    username: 'username',
    password: 'iriana123',
    email: 'iriana@example.com',
    // profilePicture: null,
    profilePicture:
      'https://s3-alpha-sig.figma.com/img/ff5c/c365/0faa155c0df565445e57248a3e7f6dc3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=acsz1jstEj4OB5rnJyhyHCPE1ite17q-HjuPQz5hlRBBYR0M7eXDUfXf~Lau3Mx1VwsHDiXSLVetYARXpkr1zY3e8jc6InPIz80kJflqnV5pXy5eISGkxdjAEqTeScBPAO50YcbNoaMSvHMlTQx5M1Qk4r7Q0ExTiNlfTH0aKK86QAGR4-xLIK8PUgYFoXqBi2mHBAvfOB-crO92T6E3NFMQQzrT4gjSBsfn15WMU~54VFBQXzlzsX6zliKpFaYB6DhS5edblSHecaDXtYoLcFZisW-1MGXJz0Y5lA-SVAm~cIg1W8FidOjVjZG8mQ51Vt9LXhXoC4Rf5Xcrki0ncw__',
  },
];
