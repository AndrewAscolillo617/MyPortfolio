import Image from "next/image";
import styles from "./page.module.css";
import HomeAbout from "../../components/HomeAbout";

export default function Home() {
  return (
    
    <div>
      <HomeAbout></HomeAbout>
      
      <div style={{display : 'flex', justifyContent : 'center', gap: '.2rem'}}>
          <button style={{
            position : 'relative', 
            justifySelf : 'center', 
            display : 'flex'}} >Contact Me here →
          </button>
          
          <button style={{
            position : 'relative', 
            justifySelf : 'center', 
            display : 'flex'}} >Download CV ⤓
          </button>

          <button style={{
            position : 'relative', 
            justifySelf : 'center', 
            display : 'flex'}} >Contact Me here →
          </button>
          
          <button style={{
            position : 'relative', 
            justifySelf : 'center', 
            display : 'flex'}} >Download CV
          </button>


      </div>
    </div>
  );
}
