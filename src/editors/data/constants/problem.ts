import { StrictDict } from '../../utils';
import singleSelect from '../images/singleSelect.png';
import multiSelect from '../images/multiSelect.png';
import dropdown from '../images/dropdown.png';
import numericalInput from '../images/numericalInput.png';
import textInput from '../images/textInput.png';
import advancedOlxTemplates from './advancedOlxTemplates';
import basicOlxTemplates from './basicOlxTemplates';
export const ProblemTypeKeys = StrictDict({
  SINGLESELECT: 'multiplechoiceresponse',
  MULTISELECT: 'choiceresponse',
  TEXTINPUT: 'stringresponse',
  ADVANCED: 'advanced',
} as const);
export type ProblemType = typeof ProblemTypeKeys[keyof typeof ProblemTypeKeys];
export const ProblemTypes = StrictDict({
  [ProblemTypeKeys.SINGLESELECT]: {
    title: 'Single Choice',
    preview: singleSelect,
    previewDescription: 'Users must select the correct answer from a list of possible options.',
    description: 'Enter your answers for a single-choice question and select the correct option. Users must select only one correct answer.',
    helpLink: '',
    prev: ProblemTypeKeys.TEXTINPUT,
    next: ProblemTypeKeys.MULTISELECT,
    template: basicOlxTemplates.singleSelect,
  },
  [ProblemTypeKeys.MULTISELECT]: {
    title: 'Multiple Choice',
    preview: multiSelect,
    previewDescription: 'Users must select all the correct answers from a list of possible options.',
    description: 'Enter your answers for a multiple-choice question and select the correct option. Users must select all correct answers.',
    helpLink: '',
    next: ProblemTypeKeys.DROPDOWN,
    prev: ProblemTypeKeys.SINGLESELECT,
    template: basicOlxTemplates.multiSelect,
  },
  [ProblemTypeKeys.TEXTINPUT]: {
    title: 'Text Input Question',
    preview: textInput,
    previewDescription: 'Enter one or more correct text answers, including numbers and special characters (except the & symbol), to be entered in the answer field.',
    description: 'Enter your answers for text input and select the correct option. Users must enter only one correct answer.',
    helpLink: '',
    prev: ProblemTypeKeys.MULTISELECT,
    next: ProblemTypeKeys.ADVANCED,
    template: basicOlxTemplates.textInput,
  },
  [ProblemTypeKeys.ADVANCED]: {
    title: 'Advanced Problem',
    preview: ('<div />'),
    description: 'Advanced question type',
    helpLink: '',
  },
});
export const AdvanceProblemKeys = StrictDict({
  BLANK: 'blankadvanced',
  CIRCUITSCHEMATIC: 'circuitschematic',
  JSINPUT: 'jsinputresponse',
  CUSTOMGRADER: 'customgrader',
  IMAGE: 'imageresponse',
  FORMULA: 'formularesponse',
  PROBLEMWITHHINT: 'problemwithhint',
} as const);
export type AdvancedProblemType = typeof AdvanceProblemKeys[keyof typeof AdvanceProblemKeys];
export function isAdvancedProblemType(pt: ProblemType | AdvancedProblemType): pt is AdvancedProblemType {
  return Object.values(AdvanceProblemKeys).includes(pt as any);
}
export const AdvanceProblems = StrictDict({
  [AdvanceProblemKeys.BLANK]: {
    title: 'Blank Problem',
    status: '',
    template: '<problem></problem>',
  },
  [AdvanceProblemKeys.CIRCUITSCHEMATIC]: {
    title: 'Circuit Schematic Builder',
    status: 'Not Supported',
    template: advancedOlxTemplates.circuitSchematic,
  },
  [AdvanceProblemKeys.JSINPUT]: {
    title: 'Custom JavaScript Rendering and Grading',
    status: '',
    template: advancedOlxTemplates.jsInputResponse,
  },
  [AdvanceProblemKeys.CUSTOMGRADER]: {
    title: 'Custom Grading in Python',
    status: 'Preview',
    template: advancedOlxTemplates.customGrader,
  },
  [AdvanceProblemKeys.IMAGE]: {
    title: 'Image Mapping Input',
    status: 'Not Supported',
    template: advancedOlxTemplates.imageResponse,
  },
  [AdvanceProblemKeys.FORMULA]: {
    title: 'Mathematical Expression Input',
    status: '',
    template: advancedOlxTemplates.formulaResponse,
  },
  [AdvanceProblemKeys.PROBLEMWITHHINT]: {
    title: 'Problem with Adaptive Hint',
    status: 'Not Supported',
    template: advancedOlxTemplates.problemWithHint,
  },
} as const);
export const ShowAnswerTypesKeys = StrictDict({
  NEVER: 'never',
  AFTER_ALL_ATTEMPTS_OR_CORRECT: 'after_all_attempts_or_correct',
} as const);
export const ShowAnswerTypes = StrictDict({
  [ShowAnswerTypesKeys.NEVER]: {
    id: 'authoring.problemeditor.settings.showanswertype.never',
    defaultMessage: 'Never Show',
  },
  [ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS_OR_CORRECT]: {
    id: 'authoring.problemeditor.settings.showanswertype.after_all_attempts_or_correct',
    defaultMessage: 'Show After All Attempts or Correct',
  },
} as const);
export const RandomizationTypesKeys = StrictDict({
  NEVER: 'never',
  ALWAYS: 'always',
  ONRESET: 'onreset',
  PERSTUDENT: 'per_student',
} as const);
export const RandomizationTypes = StrictDict({
  [RandomizationTypesKeys.ALWAYS]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.always',
    defaultMessage: 'Always',
  },
  [RandomizationTypesKeys.NEVER]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.never',
    defaultMessage: 'Never',
  },
  [RandomizationTypesKeys.ONRESET]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.onreset',
    defaultMessage: 'On Reset',
  },
  [RandomizationTypesKeys.PERSTUDENT]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.perstudent',
    defaultMessage: 'Per Student',
  },
} as const);
export const RichTextProblems = [ProblemTypeKeys.SINGLESELECT, ProblemTypeKeys.MULTISELECT] as const;
export const settingsOlxAttributes = [
  '@_display_name',
  '@_weight',
  '@_max_attempts',
  '@_showanswer',
  '@_show_reset_button',
  '@_submission_wait_seconds',
  '@_attempts_before_showanswer_button',
] as const;
export const ignoredOlxAttributes = [
  // '@_markdown',  // Not sure if it's safe to ignore this; some tests show that it's not.
  '@_url_name',
  '@_x-is-pointer-node',
] as const;