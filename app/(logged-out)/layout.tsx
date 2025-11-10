import LightDarkToggle from "@/components/ui/light-dark-toggle";

type Props = {
  children?: React.ReactNode;
};
function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center p-24 justify-center">
        {children}
      </div>
      <LightDarkToggle className="fixed right-0 top-1/2" />
    </>
  );
}

export default LoggedOutLayout;
