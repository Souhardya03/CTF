import React from "react";
import "./Sponsors.css";
import witch_stick from "../../assets/images/skull.png";
import nullkolkata from "../../assets/images/nullkolkata.jpg";
import linkedin from "../Team/images/linkedin.png";
import facebook from "../Team/images/facebook.png";
import twitter from "../Team/images/twitter.png";
import pwnedlabs from "../../assets/images/pwnedlabs.png";
import { Link } from "react-router-dom";
const Sponsors = () => {
    return (
        <div className=" min-h-screen lg:mt-0 mt-40 lg:pb-0 pb-8 justify-center  flex flex-col  items-center  bg-transparent">
            <div className="relative">
                <div className="absolute lg:left-[3em] lg:-top-[10em] -top-[12em] z-[1]  lg:w-[65%]  glow-effect rotate-[3deg]">
                    <img
                        src={witch_stick}
                        className="w-full h-full"
                        alt=""
                    />
                </div>
                <div className="lg:text-5xl text-4xl underline text-orange-500 z-[2] font-bold nosifer-regular relative shadow-lg ">
                    Sponsers
                </div>
            </div>
            <div className="lg:h-[15em]  stardos-stencil-regular text-[#ffffff] flex lg:flex-row flex-col  justify-center gap-8 md:gap-4  lg:gap-[10em] mt-14   items-center">
                <div className="h-[15em] hover:scale-105 duration-300 border bg-[#22222251] border-orange-500 card_back w-[20em] rounded-lg relative">
                    <div className="absolute top-4 left-4 bg-[#0f0f0fe3] w-full h-[15em] flex flex-col justify-center items-center rounded-lg border border-slate-600">
                        <Link to="https://pwnedlabs.io/" className="rounded-md pt-2 h-[8em] w-[8em] lg:h-[10em] lg:w-[10em] ">
                            <img
                                src={pwnedlabs}
                                loading="lazy"
                                alt=""
                                className="rounded-md object-cover "
                            />
                        </Link>
                        <div className="text-glow text-2xl pb-2">PWNED LABS</div>
                        <div className="flex pb-4 items-center  justify-center gap-3 ">
                            <Link to="https://www.linkedin.com/company/pwned-labs/">
                                <img
                                    src={linkedin}
                                    loading="lazy"
                                    className="w-8 h-8 glow-effect"
                                    alt=""
                                />
                            </Link>
                            <Link to="https://x.com/PwnedLabs">
                                <img
                                    src={twitter}
                                    loading="lazy"
                                    className="w-8 h-8 glow-effect"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h-[15em] hover:scale-105 duration-300 border bg-[#22222251] border-orange-500 card_back w-[20em] rounded-lg relative">
                    <div className="absolute top-4 left-4 bg-[#0f0f0fe3] w-full h-[15em] flex flex-col justify-center items-center rounded-lg border border-slate-600">
                        <Link to="https://null.community/chapters/14-kolkata" className="rounded-md pt-6 h-[8em] w-[8em] lg:h-[10em] lg:w-[10em] ">
                            <img
                                src={nullkolkata}
                                loading="lazy"
                                alt=""
                                className="rounded-md object-cover "
                            />
                        </Link>
                        <div className="text-glow text-2xl pb-2">NULL KOLKATA</div>
                        <div className="flex pb-4 items-center justify-center gap-3 ">
                            <Link to="https://www.linkedin.com/company/null-kolkata-chapter/">
                                <img
                                    src={linkedin}
                                    loading="lazy"
                                    className="w-8 h-8 glow-effect"
                                    alt=""
                                />
                            </Link>
                            <Link to="https://www.facebook.com/nullkolkata">
                                <img
                                    src={facebook}
                                    loading="lazy"
                                    className="w-8 h-8 glow-effect"
                                    alt=""
                                />
                            </Link>
                            <Link to="https://x.com/nullkol?s=11">
                                <img
                                    src={twitter}
                                    loading="lazy"
                                    className="w-8 h-8 glow-effect"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;