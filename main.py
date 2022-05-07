import numpy as np

from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from keras.applications.imagenet_utils import preprocess_input

from flask import Flask
from flask_restful import Resource, Api, reqparse
from werkzeug.datastructures import FileStorage
import tempfile

app = Flask(__name__)
app.logger.setLevel('INFO')

api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('file',
                    type=FileStorage,
                    location='files',
                    required=True,
                    help='provide a file')



global model
model = None

class ML(Resource):
    def post(self):
        args = parser.parse_args()
        the_file = args['file']

        # save a temporary copy of the file
        ofile, ofname = tempfile.mkstemp()
        the_file.save(ofname)

        # predict
        return predict(ofname)

def predict(fname):
    global model

    img = image.load_img(
        fname,
        target_size=(224,224)
    )

    x = image.img_to_array(img)/255
    x = np.expand_dims(x,axis=0)
    x = preprocess_input(x)

    return { "output": model.predict(x).tolist() }

api.add_resource(ML, '/ml')

model = load_model("model_resnet152V2.h5")

if __name__ == '__main__':
    app.run(debug=True)