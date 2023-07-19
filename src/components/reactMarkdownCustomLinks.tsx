import Link from 'next/link';
import { MdStringObject } from 'notion-to-md/build/types';
import { FunctionComponent } from 'react';

type ReactMarkdownCustomLinksProps = {
  markdown: MdStringObject;
  props: any;
};

const ReactMarkdownCustomLinks: FunctionComponent<ReactMarkdownCustomLinksProps> = ({ markdown, props }) => {
  const createLink = () => {
    if (props.href.includes('youtube.com')) {
      return (
        <div className="flex flex-col items-center p-4 m-4 bg-backgroundSecundary rounded gap-4">
          <iframe
            className="w-full"
            height="315"
            src={`https://www.youtube.com/embed/${props.href.replace('https://www.youtube.com/watch?v=', '')}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      );
    }
    if (props.href.includes('figma.com') && !props.href.includes('community')) {
      return (
        <div className="flex flex-col items-center p-4 m-4 bg-backgroundSecundary rounded gap-4">
          <iframe className="w-full" height="315" src={`https://www.figma.com/embed?embed_host=share&url=${props.href}`} title="Figma embed" allowFullScreen></iframe>
        </div>
      );
    }

    const linkList = props.href.replace('https://', '').replace('http://', '').replace('www.', '').split('/');
    return (
      <Link href={props.href}>
        <span className="flex text-text flex-row items-center p-4 m-4 bg-backgroundSecundary rounded gap-4">
          <span className="text-3xl font-bold">{linkList[0]}</span>
          {linkList.length > 1 && linkList.shift() ? (
            linkList.map((link) => {
              return (
                <span key={link} className="text-xl font-semibold">
                  {link.replaceAll('-', ' ').substring(0, 50).concat('...')}
                </span>
              );
            })
          ) : (
            <></>
          )}
        </span>
      </Link>
    );
  };

  return <>{createLink()}</>;
};

export default ReactMarkdownCustomLinks;
