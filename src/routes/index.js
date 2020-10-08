const { default: ContactsComponent } = require("../containers/Contacts");
const { default: CreateContactComponent } = require("../containers/CreateContact");
const { default: LoginComponent } = require("../containers/Login");
const { default: RegisterComponent } = require("../containers/Register");

const routes = [
    {
        path: '/auth/register',
        component:RegisterComponent,
        title :"Register"
    },
    {
        path: '/auth/login',
        component:LoginComponent,
        title:'Login'
    },
    {
        path: '/',
        component:ContactsComponent,
        title: 'Contacts'
    },
    {
        path: '/contacts/create',
        component:CreateContactComponent,
        title: 'Create Contact'
    }
];

export default routes;