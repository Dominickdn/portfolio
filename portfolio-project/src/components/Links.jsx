import { FileDown, Github, Linkedin } from "lucide-react"

const Links = () => {

//   const handleDownload = () => {
//     const url = require("../assets/CV.pdf");
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'cv.pdf');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
 
return (
        <>
            <section className="flex flex-col fixed right-0 top-0 pr-2 custom-font z-20">
    
                    <div className="flex items-center justify-center p-5">
                        <a href="https://www.linkedin.com/in/dominick-das-neves-503a4b23a/" target="_blank">
                            <Linkedin width={38} height={38}/>
                        </a>
                    </div>
                    <div className="flex items-center justify-center p-5 ">
                        <a href="https://github.com/Dominickdn" target="_blank">
                            <Github width={38} height={38}/>
                        </a>
                    </div>
                    <div className="flex items-center justify-center p-5 ">
                        <a href="/Resume-Dominick-Das-Neves (updated).pdf" target="_blank">
                            <FileDown width={38} height={38}/>
                        </a>
                    </div>
            
            </section>
        </>
    )
}

export default Links
