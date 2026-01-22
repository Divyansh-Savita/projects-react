import { useState } from "react";
import QRCode from "react-qr-code";


export default function QRCodeGenerator(){
    const [qrCode,setQrCode]=useState('');
    const [input,setInput]=useState('');

    function handleGeneratQrCode(){
        setQrCode(input);
        setInput('');
    }

    return <div>
    <h1>QR Code Generator</h1>
    <div>
        <input type="text" name="qr-code" placeholder="Enter your value here" onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button onClick={handleGeneratQrCode} disabled={input && input.trim() !==''?false:true}>Generate</button>
        <QRCode id="qr-code-value"
        value={qrCode} size={400} bgColor="#fff"
        />
    </div>
    </div>
}