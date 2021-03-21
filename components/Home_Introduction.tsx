import Link from 'next/link'
import React, { useState } from "react";
import styled from 'styled-components'
import Image from 'next/image';



export default function Introduction(){
    return(
        <div >
            <div >
                <div >
                    <h2 >Sua fome acaba aqui!</h2>
                    <h5 >Baixe o app ou acesse sua conta</h5>
                    <div >
                        <Link href='/about'>
                            <a >
                                <Image
                                    src="/disponivel_no_google_play.png"
                                    alt="Yoomy"
                                    width={254}
                                    height={76}
                                />
                            </a>
                        </Link>
                        <Link href='/about'>
                            <a  >
                                <Image
                                    src="/baixar_na_app_store.png"
                                    alt="Yoomy"
                                    width={254}
                                    height={76}
                                />
                            </a>
                        </Link>
                    </div>
                    
                </div> 
                <div >
                    <Image
                        src="/prato_com_comida.png"
                        alt="Yoomy"
                        width={742}
                        height={745}
                    />
                </div>
                <div >
                    <Image
                        src="/padronagem.png"
                        alt="Yoomy"
                        width={1040}
                        height={442}
                    />
                </div>
            </div>
            {/* <div className={styles.pratoDeComidaquadradoContainer}>
                <Image
                    src="/Grupo_9775.png"
                    alt="Yoomy"
                    width={1355}
                    height={727}
                />
            </div> */}
            {/* <div className={styles.quadradoBranco}></div> */}
            {/* <div className={styles.fundo}></div> */}
             
        </div>
    )
}
