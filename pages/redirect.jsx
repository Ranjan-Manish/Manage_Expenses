import Link from "next/link";


const RedirectPage = ({ message }) => {
  return (
    <div style={{ margin: "100px" }}>
      <h1>{message}</h1>
      <Link href={"/"}>Click here to add new entry</Link>
    </div>
  );
};

export default RedirectPage;

export async function getServerSideProps(context) {
  const {
    query: { message },
  } = context;
  return { props: { message: message || "" } };
}
