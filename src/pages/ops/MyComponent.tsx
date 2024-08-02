import { useEffect, useState, useRef } from "react";
import { remoteApi, Subscription, eventBus } from "../../libs";
import { useDynamicCss } from "../../libs";
import reactLogo from "../../assets/react.svg";


export function MyComponent({ id }: { id?: string }) {
  const [appLevelApiResponse, setAppLevelApiResponse] = useState("");
  const [compLevelApiResponse, setCompLevelApiResponse] = useState("");
  const apiSubscriptionRef = useRef<Subscription<{ message: string }> | null>(null);
  const eventSubscriptionRef = useRef<Subscription<{ message: string }> | null>(null);

  useDynamicCss("/OpsSamplePage.css", "dynamic-css");

  useEffect(() => {
    apiSubscriptionRef.current = remoteApi.register({
      topic: "component-level-api",
      channel: id ? `my-component-${id}` : "my-component",
      handler: async (payload: { message: string }) => {
        const res = {
          response: `component-level-api: ${payload.message} from ${id}`,
        };
        setCompLevelApiResponse(`trigger component-level-api for ${id}`);
        return res;
      },
    });

    eventSubscriptionRef.current = eventBus.subscribe({
      topic: "parentSelectionChanged",
      channel: id ? `my-component-${id}` : "my-component",
      handler: (payload) => {
        console.log(`[${id}] Received parentSelectionChanged:`, payload);
      },
    });

    return () => {
      if( apiSubscriptionRef.current ) {
        remoteApi.unregister(apiSubscriptionRef.current);
      }

      if (eventSubscriptionRef.current) {
        eventBus.unsubscribe(eventSubscriptionRef.current);
      }
    };
  }, [id]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Panel</h1>
      <div className="card">
        <button
          onClick={() => {
            remoteApi

              .callApi({
                topic: "app-level-api",
                payload: { message: "Hello, world!" },
              })
              .then((response) => {
                // console.log("API response:", response);
                setAppLevelApiResponse(JSON.stringify(response));
              })
              .catch((error) => {
                // console.error("API call failed:", error);
                setAppLevelApiResponse(JSON.stringify(error));
              });
          }}
        >
          {" "}
          call app-level-api
        </button>
        <button
          onClick={() => {
            eventBus.publish({
              topic: "selectionChanged",
              payload: { component: id, uid: "uid1" },
            });
          }}
        >
          {" "}
          send selection change event
        </button>
        <div>{appLevelApiResponse}</div>
        <div>{compLevelApiResponse}</div>
      </div>
    </>
  );
}

export default MyComponent;
