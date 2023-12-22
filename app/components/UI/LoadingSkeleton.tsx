import { Card, Skeleton } from "@nextui-org/react";

const LoadingSkeleton = () => {
  return (
    <section className="flex flex-col   xl:justify-start  min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black font-poppins">
      <div className="flex xl:justify-start justify-center mt-12 xl:ml-24 xl:w-1/2">
        <div className="mb-12 xl:mb-24 ml-12 xl:ml-0">
          <div className="flex flex-row gap-4">
            <Card className="w-[80px] space-y-5" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-6 rounded-lg bg-default-300"></div>
              </Skeleton>
            </Card>
            <Card className="w-[80px] space-y-5" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-6 rounded-lg bg-default-300"></div>
              </Skeleton>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row md:gap-24">
        <div className="xl:ml-24">
          <div className="flex flex-row justify-center items-center gap-4 xl:block xl:gap-0">
            <div className="xl:mb-10">
              <Card className="sm:w-80 w-64 space-y-5" radius="lg">
                <Skeleton className="rounded-lg">
                  <div className="sm:h-12 h-10  rounded-lg bg-default-300"></div>
                </Skeleton>
              </Card>
            </div>
            <div className="hidden xl:block">
              <Card className="w-80 h-[332px] space-y-5 p-2" radius="lg">
                <Skeleton className="rounded-lg">
                  <div className="h-[120px] rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                  <div className="h-[60px] rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                  <div className="h-[60px] rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                  <div className="h-[60px] rounded-lg bg-default-300"></div>
                </Skeleton>
              </Card>
            </div>
            <div className="xl:hidden">
              <Card className="w-10 h-10  p-1" radius="lg">
                <Skeleton className="rounded-lg">
                  <div className="rounded-lg bg-default-300"></div>
                </Skeleton>
              </Card>
            </div>
          </div>
          <div className="xl:hidden flex justify-center mt-4 mb-4">
            <Card className="w-80 h-8 sm:w-[512px]  p-1" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="rounded-lg bg-default-300"></div>
              </Skeleton>
            </Card>
          </div>
        </div>
        <div>
          <div className="flex md:flex-col flex-col-reverse w-full">
            <div className="flex w-full  gap-4 justify-center  mb-12">
              <div className="flex flex-row gap-4">
                <Card className="w-[80px] space-y-5" radius="lg">
                  <Skeleton className="rounded-lg">
                    <div className="h-6 rounded-lg bg-default-300"></div>
                  </Skeleton>
                </Card>
                <Card className="w-[80px] space-y-5" radius="lg">
                  <Skeleton className="rounded-lg">
                    <div className="h-6 rounded-lg bg-default-300"></div>
                  </Skeleton>
                </Card>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:mb-12">
            <ul
              role="list"
              className="max-w-7xl flex flex-row flex-wrap justify-center 2xl:justify-start  gap-6 mb-12  mx-3"
            >
              {[...Array(8)].map((_, index) => (
                <li key={index}>
                  <Card
                    className="w-[280px] h-[410px] space-y-12 p-4"
                    radius="lg"
                  >
                    <Skeleton className="rounded-lg">
                      <div className="h-64 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                      <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingSkeleton;
