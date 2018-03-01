<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>T_SFC</Name>
    <UserStyle>
      <Name>T_SFC</Name>
      <Title>Temperature Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap>
              <ColorMapEntry color="#23dae7" quantity="0" label="0 - 10" />
              <ColorMapEntry color="#69f2b7" quantity="10" label="10 - 20" />
              <ColorMapEntry color="#81f785" quantity="20" label="20 - 30" />
              <ColorMapEntry color="#f5f35e" quantity="30" label="30 - 40" />
              <ColorMapEntry color="#f0b158" quantity="40" label="40 - 50" />
              <ColorMapEntry color="#dd6423" quantity="50" label="50 - 60" />
              <ColorMapEntry color="#ca0020" quantity="60" label="60+" />
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>