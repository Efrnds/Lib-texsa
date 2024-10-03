// Em Header.js
import { Link } from "react-router-dom";
import { FaUserSlash, FaUserCog, FaHome } from "react-icons/fa";

const Header = ({ isLoggedIn, handleLogout, userStatus, imgPath, indexPath, configPath }) => {
    return (
        <header className="flex items-center justify-between p-4 ">
            <div>
                <h1
                    className="text-5xl font-bold transition hover:drop-shadow-lg hover:text-slate-700"
                    alt=""
                >
                    <Link to="/">
                        <img src={imgPath} alt="" className="w-40" />
                    </Link>
                </h1>
            </div>
            <nav className="flex items-center">
                <div>
                    {isLoggedIn && (
                        <div>
                            <div className="hidden gap-3 text-sm md:flex">
                                <Link
                                    to={indexPath}
                                    className="px-4 py-2 text-white transition bg-green-600 rounded-sm cursor-pointer hover:drop-shadow-lg hover:bg-green-800"
                                >
                                    Início
                                </Link>
                                {userStatus === "1" && ( // Verifica se o usuário é admin
                                    <Link
                                        to={configPath}
                                        className="px-4 py-2 text-white transition rounded-sm cursor-pointer bg-slate-600 hover:drop-shadow-lg hover:bg-slate-800"
                                    >
                                        Configurações
                                    </Link>
                                )}
                                <button
                                    className="px-4 py-2 text-white transition bg-red-600 rounded-sm cursor-pointer hover:drop-shadow-lg hover:bg-red-800"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                            <menu className="md:hidden">
                                <div className="flex gap-2">
                                    <Link to={indexPath} className="block py-2">
                                        <FaHome className="cursor-pointer" />
                                    </Link>
                                    {userStatus === "1" && ( // Verifica se o usuário é admin
                                        <Link
                                            to={configPath}
                                            className="block py-2"
                                        >
                                            <FaUserCog className="cursor-pointer" />
                                        </Link>
                                    )}
                                    <button
                                        onClick={handleLogout}
                                        className="block py-2"
                                    >
                                        <FaUserSlash className="cursor-pointer" />
                                    </button>
                                </div>
                            </menu>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
