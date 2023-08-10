import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        fetch()
    }, [])

    const items = [
        {
            id: 1,
            firstName: 'Samson',
            lastName: 'Jacob'
        },
        {
            id: 2,
            firstName: 'Samson',
            lastName: 'Jacob'
        },
        {
            id: 3,
            firstName: 'Samson',
            lastName: 'Jacob'
        }
    ]

    return ( 
        <div>
            {items.map((item) => (
                <div>{item.firstName}</div>
            ))}
        </div>
     );
}
 
export default Contact;