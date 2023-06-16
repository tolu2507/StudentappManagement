import { supabase } from "../lib/supabaseClient";
import BottomNav from "../component/Bottom";
import BottomContent from "../component/BottomContent";
import BottomContainer from "./container/BottomContainer";

export default async function Page() {
  let { data: countries, error } = await supabase.from("countries").select("*");

  let dataReturner: JSX.Element = <></>;
  if (error) {
    dataReturner = (
      <div>there is an error in the data server side {error.message}</div>
    );
  }
  if (countries) {
    dataReturner = (
      <div className="flex justify-between items-center">
        {countries.map((country) => (
          <div key={country.id} className="font-semibold mx-2">
            {country.name}
          </div>
        ))}
      </div>
    );
  }

  return (
    <BottomContainer>
      <BottomContent />
      <BottomNav data={dataReturner} />
    </BottomContainer>
  );
}
