export const BookCard = ({book}) => {
    return (
        <>
            <li>
                <h4>
                    {book.title}
                </h4>
                <p>{book.author}</p>
                <p>{book.year}</p>
                <span>
                    {book.status}
                </span>
            </li>
        </>
    )
}
