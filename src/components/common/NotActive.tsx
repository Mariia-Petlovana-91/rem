import sleep from "../../img/sleep.png";

const NotActive =()=>{
        return <div className="p-4 max-w-[600px] mx-auto border border-secondary-cyan rounded-2xl">
                <p className="text-secondary-cyan text-lg font-bold text-center">This page is not active yet</p>
                <img src={sleep} alt="the cat is sleeping" className="max-w-full max-h-[400px] mx-auto"/>
        </div>
}

export default NotActive;