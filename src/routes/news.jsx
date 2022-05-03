import { NavLink, Outlet, useParams } from "react-router-dom";
import { getInvoices } from "../data";
import { getInvoice } from "../data";

export default function News() {
  let invoices = getInvoices();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main>
      <h2>News</h2>
      <nav>
        <h2>Invoice: {params.invoiceID}</h2>
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/news/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </main>
  );
}
