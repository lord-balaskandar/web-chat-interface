import './App.css';
import ChatBubble from './components/chatBubble/chatBubble';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='chat'>
      <ChatBubble rec={true}>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur at turpis et consequat. Ut imperdiet justo vel nibh varius, quis porttitor lacus auctor. Aliquam consectetur imperdiet rutrum. Sed ac tellus malesuada mauris sodales aliquam. Integer nec diam arcu. Sed sollicitudin massa sit amet metus suscipit, eget vestibulum ipsum ultricies. Duis sed ullamcorper nunc. Curabitur cursus urna eget luctus auctor. Maecenas hendrerit facilisis lacus, et accumsan tellus placerat eget. Aliquam nec ligula sit amet tellus dictum commodo. Vestibulum a pretium lectus.

Sed finibus odio et elit dictum, sed interdum ligula ornare. Nam nec nisl sodales, tristique ligula quis, interdum sapien. Donec sit amet augue sem. Nullam lobortis pulvinar metus, eget venenatis erat consequat sed. Nunc luctus orci ex, ut viverra eros egestas ac. Duis fringilla diam sit amet nisl sagittis sollicitudin. Quisque eget ex lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Aliquam lobortis, lectus sodales varius tincidunt, nisl tellus euismod quam, eget tincidunt ante felis nec lacus. Mauris viverra, orci et dapibus vestibulum, turpis urna aliquam nisi, id tincidunt leo nunc in risus. Morbi imperdiet mauris risus, in pellentesque mi porta non. Nunc sem libero, efficitur feugiat ligula non, rhoncus vulputate leo. Etiam suscipit in ex vitae viverra. Donec dapibus egestas erat, eget pulvinar ligula dignissim vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit lacinia sem, a feugiat ligula. Vivamus ut leo nisi. Morbi sit amet lectus facilisis leo ullamcorper lacinia. Aenean turpis mauris, vulputate id odio sed, facilisis ultrices urna. Aliquam finibus, dolor eget tempor mattis, lectus nunc euismod quam, sit amet dapibus risus ligula vitae enim. Etiam et vulputate nibh.

Integer semper, augue in vulputate commodo, enim leo laoreet nunc, ac placerat enim augue a lectus. Maecenas ut porttitor leo. Nulla ante velit, tincidunt quis felis malesuada, rhoncus dictum leo. Mauris vel dapibus neque, tincidunt ultricies enim. In feugiat, ligula blandit pharetra pellentesque, eros tellus ultricies dolor, sagittis ultrices nibh mauris vitae justo. Aliquam vitae purus fermentum erat semper placerat. Vivamus felis arcu, sollicitudin eu ultricies eget, semper a nibh. Proin ut tincidunt libero, eget dictum massa.

Mauris pretium nulla at augue lacinia efficitur. Quisque at dictum odio. Pellentesque dapibus porta lectus, et consectetur lacus tincidunt rhoncus. Nunc quis erat in ipsum pulvinar imperdiet. Sed a diam sit amet urna accumsan varius ut a ligula. Curabitur iaculis felis non orci pharetra, quis pretium purus blandit. Mauris ut metus vitae ligula iaculis tempus. Sed elementum tortor in arcu sodales, vel aliquam sapien vehicula. Aenean interdum dui sit amet nisl eleifend mollis. Integer in dolor sagittis, euismod odio pulvinar, dapibus risus. Fusce at lectus tristique, fermentum metus vel, vulputate tortor. Ut efficitur erat vel orci fermentum posuere. Suspendisse imperdiet sapien magna, in faucibus lectus sodales non. </ChatBubble>
      <ChatBubble rec={false}>Hello</ChatBubble>
    </div>
    </div>
  );
}

export default App;
