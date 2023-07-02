
import {LazyExoticComponent, lazy} from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy';


type JSXComponent = () =>  JSX.Element;

interface Route {
    to: string;
    path:string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string;
}


const LazyLayout = lazy( ()=> import('../01-lazyload/layout/LazyLayout'))

export const routes : Route[] = [
    {
        to:'/lazy1',
        path:'/lazy1',
        Component: LazyLayout,
        name:'lazyload '
    },
    {
        to:'/lazy2',
        path:'/lazy2',
        Component: NoLazy,
        name:'no lazy'
    },
]
