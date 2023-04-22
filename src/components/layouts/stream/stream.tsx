import { ContainerScreen, ContainerFullScreen } from "../../atomic/container/container";

interface StreamProps {
    main?: string | JSX.Element | JSX.Element[];
    title?: string | JSX.Element;
    sideMain?: string | JSX.Element | JSX.Element[];
    actions?: string | JSX.Element | JSX.Element[];
}

const StreamLayout = (props: StreamProps) => {

    return(
        <ContainerFullScreen>
            <div className="col-8 layout__stream-content-main">
                {props.main}
            </div>
            <div className="col-4 layout__stream-content-side">
                <div className="row layout__stream-side-title">
                    <h4 className="stream__side-title-text ">
                        {props.title}
                    </h4>
                </div>
                <div className="row layout__stream-side-main">
                    {props.sideMain}
                </div>
                <div className="row layout__stream-side-actions">
                    {props.actions}
                </div>
            </div>
        </ContainerFullScreen>
    );
}

export default StreamLayout;