type Props = {
    children: string | JSX.Element | JSX.Element[];
}

export const ContainerScreen = ({children}:Props) => (
    <div className="container__screen bg-dark">
        {children}
    </div>
);

export const ContainerFull = ({children}:Props) => (
    <div className="col container__full">
        {children}
    </div>
);

export const ContainerFullScreen = ({children}:Props) => (
    <div className="row container__fullscreen">
        {children}
    </div>
);

export const ContainerPanel = ({children}:Props) => (
    <div className="col-4 container__panel">
        {children}
    </div>
);