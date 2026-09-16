// Replace this with your real WhatsApp Business number, country code included, without + or spaces.
const WHATSAPP_NUMBER = "918927116305";
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("form").addEventListener("submit",e=>{
 e.preventDefault(); const d=new FormData(e.target);
 const text=`Hello STORYBOOK STUDIO,\n\nI would like to enquire about wedding photography and filmmaking.\n\nName: ${d.get("name")}\nPartner: ${d.get("partner")}\nWedding Date: ${d.get("date")}\nWedding Location: ${d.get("location")}\n\nMessage: ${d.get("message")}\n\nPlease let me know your availability and details.`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,"_blank");
});