import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import capacitorConfig from "../../capacitor.config";
import { Capacitor } from "@capacitor/core";

import { useEffect, useState } from "react";
import React from "react";
type EntryUrlStaticProps = { entryUrl: string };
const Redirect: NextPage<EntryUrlStaticProps> = ({ entryUrl }) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div>
      <h1>Nextjs app loaded by capacitor</h1>
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
      <a href={entryUrl}>Navigate to the web-app</a>
    </div>
  );
};

export const getStaticProps: GetStaticProps<EntryUrlStaticProps> = () => ({
  props: {
    entryUrl: capacitorConfig.entryUrl
  }
});
export default Redirect;
