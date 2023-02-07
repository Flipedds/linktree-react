import './RedesSociais.css'
const RedesSociais = () =>{

    const ListaRedes = [
        { id: 1 , urlNome: 'Instagram', url:'https://www.instagram.com/f_andr3/'},
        { id: 2 , urlNome: 'Linkedin', url:'https://www.linkedin.com/in/filipe-andr%C3%A9-16b1bb239/'},
        { id: 3 , urlNome: 'Github', url:'https://github.com/Flipedds'},
        { id: 4 , urlNome: 'Twitch', url:''},
    
    ]

    const LinksRedes = ListaRedes.map((props) =>
    <div key={props.id} className='conteudo_links'>
        <a href={props.url}>{props.urlNome}</a>
    </div>
    )
    return(
        <>
        {LinksRedes}
        </>
    )
}
export default RedesSociais