import { NextPage } from "next";
import { Capacitor } from "@capacitor/core";
import { useEffect, useState } from "react";

const App: NextPage = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div>
      <h1>
        Another Nextjs app, allow-listed under{" "}
        <code>server.allowNavigation</code>
      </h1>
      <p>In this app, Capacitor identifies the platform as:</p>
      <table>
        <thead>
          <tr>
            <th>isNativePlatform</th>
            <th>platform</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {client ? (
              <>
                <td>
                  <code>{Capacitor.isNativePlatform() ? "true" : "false"}</code>
                </td>
                <td>
                  <code>{Capacitor.getPlatform()}</code>
                </td>
              </>
            ) : (
              <>
                <td>loading</td>
                <td>loading</td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
