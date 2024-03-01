import Header from '../Header';
import Footer from '../Footer';
import useTextColorChange from '../../hooks/useTextColorChange.tsx';
import useBackgroundColorChange from '../../hooks/useBackgroundColorChange.tsx';
import useBorderColorChange from '../../hooks/useBorderColorChange.tsx';

function VideoGames() {
  const duration = 1200;

  ////// div 1
  // Change text color
  const colorsText = ['black', 'white'];
  useTextColorChange('textColor', colorsText, duration);

  ////// div 2
  // Change background color
  const colorsBackground = ['red', 'green'];
  useBackgroundColorChange('bgColor', colorsBackground, duration);

  ////// div 3
  // Change border color
  const colorsBorder = ['red', 'green'];
  useBorderColorChange('borderColor', colorsBorder, duration);

  ////// div 4 - text and bg
  const colorsText4 = ['red', 'green'];
  useTextColorChange('textColor4', colorsText4, duration);
  const colorsBackground2 = ['black', 'yellow'];
  useBackgroundColorChange('bgColor2', colorsBackground2, duration);

  ////// div 5 - text and border
  const colorsText5 = ['yellow', 'purple'];
  useTextColorChange('textColor5', colorsText5, duration);
  const colorsBorder5 = ['yellow', 'purple'];
  useBorderColorChange('borderColor5', colorsBorder5, duration);

  ////// div 6 - border and bg
  const colorsBackground6 = ['pink', 'black'];
  useBackgroundColorChange('bgColor6', colorsBackground6, duration);
  const colorsBorder6 = ['blue', 'white'];
  useBorderColorChange('borderColor6', colorsBorder6, duration);

  ////// div 7 - text and bg and border
  const colorsText7 = ['black', 'white'];
  useTextColorChange('textColor7', colorsText7, duration);
  const colorsBackground7 = ['red', 'green'];
  useBackgroundColorChange('bgColor7', colorsBackground7, duration);
  const colorsBorder7 = ['purple', 'yellow'];
  useBorderColorChange('borderColor7', colorsBorder7, duration);

  return (
    <>
      <Header />
      <main
        className=" mx-auto mt-10 max-w-7xl px-2 py-2 
                    sm:mt-14 
                    lg:px-4 
                    xl:mt-20 
                    2xl:px-0"
      >
        <section>
          <div className="block xl:flex xl:justify-between">
            <div
              id="textColor"
              className="mb-2 w-[250px] rounded-lg border-4 border-solid bg-slate-500 p-4 text-center font-bold duration-700 xl:mr-2"
            >
              Text
            </div>
            <div
              id="bgColor"
              className="mb-2 w-[250px] rounded-lg border-4 border-solid bg-slate-500 p-4 text-center font-bold duration-700 xl:mx-2"
            >
              Background
            </div>
            <div
              id="borderColor"
              className="mb-2 w-[250px] rounded-lg border-4 border-solid bg-slate-500 p-4 text-center font-bold duration-700 xl:ml-2"
            >
              Border
            </div>
          </div>
          <div className="block xl:flex xl:justify-between">
            <div
              id="bgColor2"
              className="mb-2 w-[250px] rounded-lg border-4 border-solid bg-slate-500 p-4 text-center font-bold duration-700 xl:mr-2"
            >
              <span id="textColor4">Text and bg</span>
            </div>
            <div
              id="borderColor5"
              className="mb-2 w-[250px] rounded-lg border-4 border-solid bg-slate-500 p-4 text-center font-bold duration-700 xl:mx-2"
            >
              <span id="textColor5">Text and border</span>
            </div>
            <div
              id="borderColor6"
              className="mb-2 w-[250px] rounded-lg border-4 border-solid xl:ml-2"
            >
              <div
                id="bgColor6"
                className="p-4 text-center font-bold duration-700"
              >
                Border and bg
              </div>
            </div>
          </div>
          <div className="block xl:flex xl:justify-center">
            <div
              id="borderColor7"
              className="mb-2 w-[250px] rounded-lg border-4 border-solid xl:ml-2"
            >
              <div
                id="bgColor7"
                className="p-4 text-center font-bold duration-700"
              >
                <span id="textColor7">Text and Border and Bg</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default VideoGames;
