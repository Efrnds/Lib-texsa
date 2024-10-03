function Footer({ businessName }) {
    return (
        <footer className="flex justify-between px-4">
            <p className="py-4 text-xl antialiased text-slate-700 text-wrap">
                {businessName}
            </p>
            <p className="py-4 text-xl antialiased text-slate-700 text-wrap">
                Todos os direitos reservados
            </p>
        </footer>
    );
}

export default Footer;
