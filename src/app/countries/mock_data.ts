import { Country } from './country';
import { Teams } from './country';

export const COUNTRY: Country[] = [
    {cid:1,name:'India',image:'india.png'},
    {cid:2,name:'Australia',image:'australia.png'},
    {cid:3,name:'South Africa',image:'southafrica.png'},
    {cid:4,name:'England',image:'england.png'}
  ];

export const TEAMS : Teams[] = [
    {tid:1,cid:1,name:'A',country:'India',image:'assets/images/india.png'},
    {tid:2,cid:2,name:'B',country:'Australia',image:'assets/images/australia.png'},
    {tid:3,cid:3,name:'C',country:'South Africa',image:'assets/images/southafrica.png'},
    {tid:4,cid:4,name:'D',country:'England',image:'assets/images/england.png'}
];