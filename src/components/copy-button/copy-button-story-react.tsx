/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// Below path will be there when an application installs `carbon-custom-elements` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import BXCopyButton from 'carbon-custom-elements/es/components-react/copy-button/copy-button';
import { defaultStory as baseDefaultStory } from './copy-button-story';

export { default } from './copy-button-story';

export const defaultStory = ({ parameters }) => {
  const { buttonAssistiveText, feedbackText, feedbackTimeout, onClick } = parameters?.props?.['bx-copy-button'];
  return (
    <BXCopyButton
      buttonAssistiveText={buttonAssistiveText}
      feedbackText={feedbackText || undefined}
      feedbackTimeout={feedbackTimeout}
      onClick={onClick}
    />
  );
};

defaultStory.story = baseDefaultStory.story;
