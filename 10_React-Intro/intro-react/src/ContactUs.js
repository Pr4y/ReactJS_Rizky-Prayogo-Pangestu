const ContactUs = () => {
    return (
        <>
            <div className="container-fluid" id="contact">
                <div className="row d-flex align-items-center ">
                    <div className="col-md-4 form-img">
                        <div className="kotak w-100 text-center">
                            <img className="alta" src="asset/img/logo-ALTA-v2@2x.png" />
                        </div>
                    </div>
                    <div className="col-md-8 isi-form">
                        <div>

                        </div>
                        <h3>Contact Us</h3>
                        <form>
                            <div className="form-group rincian-form">
                                <label htmlFor="nama" className="required">Full Name</label>
                                <input type="fullname" className="form-control" id="namalengkap" placeholder="Your Full Name Here..." />
                            </div>
                            <div className="form-group rincian-form">
                                <label htmlFor="alamatemail" className="required">Email Address</label>
                                <input type="email" className="form-control" id="emailbaru" aria-describedby="emailHelp" placeholder="example@domail.com" />
                            </div>
                            <div className="form-group rincian-form">
                                <label htmlFor="telepon" className="required">Phone Number</label>
                                <input type="text" className="form-control" id="phonenumber" aria-describedby="nomorbaru" placeholder="08573890xxxxx" />
                            </div>
                            <div className="form-group rincian-form">
                                <label htmlFor="kewarganegaraan">Nationality</label>
                                <select className="form-control">
                                    <option>Selected</option>
                                </select>
                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea className="form-control" rows="5" id="message"></textarea>
                                </div>
                            </div>
                            <input type="submit" className="tombol" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

            <div id="about">
                <div className="container-fluid about-me">
                    <h1 className="container pl-2 pt-5 pb-5">
                        ABOUT ME.
                    </h1>
                </div>

                <div className="container">
                    <div className="row pt-5 pb-5 ">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12 pl-5">
                            <div className="about-anne">
                                <p>
                                    Hello! I’m Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. <br /><br />
                                    Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety of interesting and meaningful projects on a daily basis. <br /><br />
                                    Here’s few technologies I’ve been working with recently :
                                </p>
                            </div>
                            <div>
                                <table className="tabel-anne">
                                    <tbody>
                                        <tr>
                                            <td>HTML & CSS</td>
                                            <td>Serverless</td>
                                            <td>Scrum</td>
                                        </tr>
                                        <tr>
                                            <td>Programming</td>
                                            <td>Restful API</td>
                                            <td>Test-Driven Dev</td>
                                        </tr>
                                        <tr>
                                            <td>Database</td>
                                            <td>Javascript</td>
                                            <td>Software Testing</td>
                                        </tr>
                                        <tr>
                                            <td>Git & Github</td>
                                            <td>Sigle Page App</td>
                                            <td>UX/UI Designer</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12 pr-5">
                            <div className="foto-id text-lg-right text-md-center text-sm-center">
                                <img src="asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" />
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
                                <a href="index.html"><img className="logo-bawah" src="asset/img/logo-ALTA-v2.png" /></a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
                                <h6>Social Media:</h6>
                                <a href="https://www.facebook.com/AlterraAcademy"><img className="logo-sosmed" src="asset/img/ic_fb@2x.png" /></a>

                                <a href="https://twitter.com/"><img className="logo-sosmed" src="asset/img/ic-twitter@2x.png" /></a>

                                <a href="https://www.instagram.com/alterra.academy/"><img className="logo-sosmed" src="asset/img/ic-instagram@2x.png" /></a>

                                <a href="https://id.linkedin.com/"><img className="logo-sosmed" src="asset/img/ic-linkedin@2x.png" /></a>

                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
                                <h6 className="text-lg-right text-md-center text-sm-center kopi">Copyleft © 2019 - Unjelas Team</h6>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default ContactUs;