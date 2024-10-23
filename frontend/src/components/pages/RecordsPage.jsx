import { Header, RecordsLeft, RecordsRight } from "../parts";

const RecordsPage = () => {
  return (
    <main className="h-full bg-base100">
      <div className="flex flex-col gap-8">
        <Header />
        <div className="container m-auto">
          <div className="px-[120px] flex flex-col gap-6">
            <div className="flex gap-6">
              <RecordsLeft />
              <RecordsRight />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecordsPage;
