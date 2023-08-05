import React from 'react'

/* import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"; */
import Link from './Link';
import { SelectedPage } from '@/shared/types';

/* import Logo from "@/assets/samaritano.png"; */

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    
    const flexBetween = "flex items-center justify-between";    

    return (
    <nav>
        <div
            className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side */}
                    <h1>Samaritano </h1>
                    {/* <img alt='logo' src={Logo} />  */}

                    {/* right side */}
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                                page='Home'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page='Sobre'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page='Projetos'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Como apoiar</p>
                            <p>Doe aqui</p>
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
    </nav>
    );
};

export default Navbar;

/* tsrafce (bizu forte) */