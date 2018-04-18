import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:822374759106:GSAClassof68')

    try:
        s3 = boto3.resource('s3')


        portfolio_bucket = s3.Bucket('gemstateclassof68.com')
        build_bucket = s3.Bucket('portfoliobuild.gemstateclassof68.com')

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print "Job done"
        topic.publish(Subject="GSAClassof68", Message="Great Success")
    except:
        topic.publish(Subject="GSAClassof68 ERROR!", Message="Upload Error")
        raise

    return 'Hello from Lambda'
