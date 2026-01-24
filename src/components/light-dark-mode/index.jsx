import useLocalStorage from "./useLocalStorage"
import "./theme.css";


export default function LightDarkMode(){

    const [theme,settheme]=useLocalStorage('theme','dark');

    function handletoggletheme(){
        settheme(theme==='light'?'dark':'light');
    }
    console.log(theme);
    

    return <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>U r the greatest</p>
            <button onClick={handletoggletheme}>Change theme</button>
        </div>
        
    </div>
}