import React from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import onasfoto from "../assets/onasfoto.jpg"
import Team from "../components/landing/Team";
import Contact from "../pages/Contact"


const sectionStyle = {
    backgroundColor: "#C20E4D", // Používame primárnu farbu pre pozadie
    padding: "200px 20px", // Padding pre sekciu
  }; 
const About = () => {
    return ( 
       
        <div style = 
        {{  flexDirection: "column", 
            width : "100%",
            minHeight : "100svh",
            height: "100%", 
            display : "flex",
            justifyItems : "center",
            alignItems : "center",
            backgroundColor: '#121212', 
            textAlign: "center",
            fontFamily: "'Opens Sans', sans-serif",
            color: "#fff",
            fontSize: "1.2rem"
         }}> 
         <div style={{padding:"32px 350px 0px 350px", }}>


    
            <h1 style={{  fontSize: "3rem",
                         fontFamily: "'Helvetica', sans-serif", 
                         textAlign: "center",
                         color: "#C20E4D", 
                        }}>O nás:</h1>
                         
            <p>
                Sme tanečná škola a voláme sa <strong>T.I.M. GROUP SLOVAKIA.</strong> Sme občianské združenie, ktoré od roku <strong>1991</strong> pôsobí na tanečnej scéne až dodnes, 
                čo je <strong>vyše 30 rokov pôsobenia</strong> nášho tanečného klubu na svetoznámych pódiách.
            </p>
            <img src = {onasfoto} alt = ""style={{ width:"100%" }}/>
            
            <p>
                Naša tanečná škola sa pýši množstvom titulov, ocenení a vyznamenaní. Za tak dlhé obdobie sme vytvorili komunitu ľudí, ktorí tvoria našu tanečnú rodinu. Jedným z našich najväčších úspechov je muzikál <strong>Báthoryčka</strong>, ktorý obletel celý svet a zožal obrovský úspech. Na tomto projekte sa podieľalo 34 skvelých tanečníkov, ktorí pomohli vytvoriť svetovú show.
            </p>
            <p>
                Venujeme sa prevažne <strong>hip-hopu</strong>, ale tiež aj <strong>contemporary</strong>, <strong>modernej klasike</strong>, prvkom <strong>baletu, breakin-u, street-dance</strong> a rôznym iným tanečným štýlom. Tieto štýly pretavujeme do vlastného umenia, ktoré nás robí jedinečnými. Naše umenie očarilo porotcov v Srbsku na európskej súťaži, a od tej doby sme pravidelne pozývaní na rôzne svetové súťaže, kde zakaždým zožneme veľký úspech.
            </p>
            <p>
                Naším cieľom je odovzdať naše skúsenosti ďalším generáciám tanečníkov. Chceme, aby to, čo sme sa celý život učili, pokračovalo ďalej a rástlo. Dbáme na profesionalitu a do našej školy vkladáme maximum svojho úsilia.
            </p>
            <p>
                Za tie roky si naša škola vyslúžila množstvo úžasných ocenení, za ktoré sme nesmierne vďační. Máme radosť z každého jedného úspechu a budeme aj naďalej robiť všetko pre to, aby sme ich počet ešte zvýšili.
            </p>

        </div>
        <Team showButton={false} isShortDescription={false}/>
        <Contact/>
     </div>
    );
}; 
export default About;
