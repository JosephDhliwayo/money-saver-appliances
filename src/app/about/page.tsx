import { business } from "@/lib/business";

export const metadata = {
  title: "About Us | Money Saver Appliances",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">
        About {business.name}
      </h1>
      <p className="mt-4 text-slate-600">
        {business.name}{" "}
        is a family-owned appliance store in Chattahoochee, FL carrying
        refrigerators, stoves &amp; ranges, washers, and dryers from trusted
        brands. We keep our overhead low so we can pass the savings on to
        you &mdash; without cutting corners on service.
      </p>
      <p className="mt-4 text-slate-600">
        Every appliance we sell comes with a manufacturer warranty, and our
        team is on hand to help you pick the right fit for your kitchen or
        laundry room and answer questions after the sale. We offer{" "}
        {business.deliveryTagline.toLowerCase()} We also offer{" "}
        {business.repairTagline.toLowerCase()}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold text-slate-900">Visit us</p>
          <p className="mt-1 text-sm text-slate-600">
            {business.address.street}
            <br />
            {business.address.city}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold text-slate-900">Call us</p>
          <p className="mt-1 text-sm text-slate-600">
            <a href={business.phoneHref} className="hover:text-teal-700">
              {business.phone}
            </a>
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold text-slate-900">Store hours</p>
          <p className="mt-1 text-sm text-slate-600">
            {business.hours.map((h, i) => (
              <span key={h.label}>
                {h.label}: {h.value}
                {i < business.hours.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
