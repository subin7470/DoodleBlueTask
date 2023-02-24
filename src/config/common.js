import {Alert} from 'react-native';

export const ShowAlert = ({
  description = '',
  declineText = 'No',
  successText = 'Yes',
  declineFunction = () => {},
  successFunction = () => {},
}) => {
  Alert.alert(
    'DoodleBlue',
    description,
    [
      {
        text: declineText,
        onPress: () => {
          declineFunction();
        },
      },
      {
        text: successText,
        onPress: () => {
          successFunction();
        },
      },
    ],
    {
      cancelable: true,
    },
  );
};
