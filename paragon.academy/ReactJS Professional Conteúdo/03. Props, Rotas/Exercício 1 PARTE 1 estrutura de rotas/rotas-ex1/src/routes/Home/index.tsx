import { Outlet } from "react-router-dom";
import Header from "../../componets/Header";

export default function Home () {

    return(
        <>
        <Header/>
        <Outlet/>
        </>
    );
}