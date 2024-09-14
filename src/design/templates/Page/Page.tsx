import { Stack, StackProps } from "@mui/material";
import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "design/organisms";
import { projectName } from "App";

import style from "./Page.style";

interface PageProps extends StackProps {
  children: ReactNode;
  title?: string;
}

/**
 * Generic page component
 *
 * This component intended to:
 * - Provide unified layout across the App
 * - Provide error boundaries
 * - Manage page head
 *
 * Recommended for usage as a wrapper for page-level components
 */
export const Page = ({ title, children }: PageProps) => {
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <Helmet>
          <title>
            {title ? `${title} | ${projectName}` : `${projectName}`}
          </title>
      </Helmet>

      <Stack sx={style.container}>
        {children}
      </Stack>
    </ErrorBoundary>
  );
};
