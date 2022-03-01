const d =document,
 w=window,
 n=navigator;

export default function networkStatus(){
    const isOnline=() => {
        const $div=createElement("div");

        if(n.online){
            $div.texContent="Conexion restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            $div.texContent="conexion perdida";
            $div.classList.add("offline");
            $divclassList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(() => d.body.removeChild($div),2000);
    };
    
    w.addEventListener("online",(e) => isOnLine());
    w.addEventListener("offline",(e) => isOnLine());

}