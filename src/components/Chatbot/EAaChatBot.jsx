import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import img from "./img.png" 
const  steps=[
    {  
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
    },
    {
      id: '4',
      message :'Thanks for visiting EAacom',
      end:true,
    }
  ] ;
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

const config = {
	botAvatar: img,
	floating: true,
};
const Bot= function() {
	return (
		<div >
			<ThemeProvider theme={theme}>
				<ChatBot  
					headerTitle="EAa-comBot"
                    steps={steps}
					{...config}
				/>
			</ThemeProvider>
		</div>
	);
}
export default Bot;
