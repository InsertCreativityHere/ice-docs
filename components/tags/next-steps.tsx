// Copyright (c) ZeroC, Inc.

import { ReactNode } from 'react';

export const NextSteps = ({
  children,
  title = 'Next steps'
}: {
  children: ReactNode;
  title?: string;
}) => (
  <section aria-label={title} className="border-hairline my-10 border-t pt-6">
    <h2 className="text-ink mb-3 text-lg font-semibold">{title}</h2>
    <div className="text-sm leading-6 *:my-1">{children}</div>
  </section>
);
