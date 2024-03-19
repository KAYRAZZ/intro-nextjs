export default function Page() {
    const lastName = 'oui';
    let message = "Vous n'existez pas!";

    return (
        <div>
            <span className={lastName && "oui"}>{message}</span>
        </div>
    );
}