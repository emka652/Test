import "../stylingcss/Style.css";
import Fp from "../../assets/home/9d4f4e3a-7849-4014-bc5d-a1d3b7fba124.jpg";

const Cardprofile = () => {
  return (
    // inline css
    <div
      style={{
        backgroundColor: "#00b6df",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card">
        <img src={Fp} />
        <div className="name">Muammar</div>
        <div className="profile">Web Designer</div>
        <div className="desc">
          Saat ini saya sedang fokus dibidang Back-End Developer, sebelumnya
          saya sudah ahli dibidang UI/UX Design. Dan jangan lupa Sob, saya juga
          ada membuka kelas Mentoring untuk yang ingin menggeluti bidang UI/UX
          Design, untuk info lebih lanjut bisa hubungi saya Sekarang
        </div>
        <button className="button">Contact Me</button>
      </div>
    </div>
  );
};

export default Cardprofile;
