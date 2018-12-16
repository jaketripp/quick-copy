import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const RecentlyCopied = props => (
  <Card className="recentlyCopied">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Recently copied
        </Typography>
        <Typography variant="h5">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
);

export default RecentlyCopied;
