import React, { Fragment } from 'react';
import { ViewStyle } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import styles from './styles';
import { User } from '../../lib/types';

type Props = {
  accept: () => void;
  decline: () => void;
  sendRequest: () => void;
  isExistingRequest: boolean;
  user: User;
  style?: ViewStyle;
}

const FriendRequestCard: React.FC<Props> = ({
  accept, decline, sendRequest, isExistingRequest, user, style,
}) => (
  <Card
    style={[styles.container, style]}
    theme={{ roundness: 0 }}>
    <Card.Title
      title={`${user.firstName} ${user.lastName}`}
      subtitle={user.username}
      left={(): JSX.Element => (
        // <Avatar.Icon {...props} color="#fff" icon="face" />
        <Avatar.Text color="#FFF" size={40} label={`${user.firstName[0]}${user.lastName[0]}`} />
      )}
    />
    <Card.Actions>
      {isExistingRequest
        && <Fragment>
          <Button onPress={accept}>
            Accept
          </Button>
          <Button onPress={decline}>
            Decline
          </Button>
        </Fragment>
      }
      {!isExistingRequest
        && <Button onPress={sendRequest}>
          Send Request
        </Button>
      }
    </Card.Actions>
  </Card>
);

export default FriendRequestCard;
